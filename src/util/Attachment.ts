const encoder = new TextEncoder()

/** Message Attachment that can be sent while Creating Message */
export default class MessageAttachment {
  name: string
  blob: Blob

  constructor(name: string, blob: Blob | Uint8Array | string) {
    this.name = name
    this.blob =
      typeof blob === 'string'
        ? new Blob([encoder.encode(blob)])
        : blob instanceof Uint8Array
        ? new Blob([blob])
        : blob
  }

  /** Load an Message Attachment from local file or URL */
  async load(
    path: string,
    filename?: string
  ){
    const blob = path.startsWith('http')
      ? await fetch(path).then((res) => res.blob())
      : await Deno.readFile(path)

    if (filename === undefined) {
      const split = path.replaceAll('\\', '/').split('/').pop()
      if (split !== undefined) filename = split.split('?')[0].split('#')[0]
      else filename = 'unnamed_attachment'
    }

    return new MessageAttachment(filename, blob)
  }
}