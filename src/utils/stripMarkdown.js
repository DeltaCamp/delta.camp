export const stripMarkdown = function (markdownContent) {
  let output = markdownContent || ''

  // Remove horizontal rules (stripListHeaders conflict with this rule, which is why it has been moved to the top)
  output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, '')

  try {
    output = output
      // Remove HTML tags
      .replace(/<[^>]*>/g, '')
      
      // Remove setext-style headers
      .replace(/^[=\-]{2,}\s*$/g, '')

      // Remove footnotes?
      .replace(/\[\^.+?\](\: .*?$)?/g, '')
      .replace(/\s{0,2}\[.*?\]: .*?$/g, '')

      // Remove images
      .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, '')

      // Remove inline links
      .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')

      // Remove blockquotes
      .replace(/^\s{0,3}>\s?/g, '')

      // Remove reference-style links?
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')

      // Remove atx-style headers
      .replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, '$1$2$3')

      // Remove emphasis (repeat the line to remove double emphasis)
      .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
      .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')

      // Remove code blocks
      .replace(/(`{3,})(.*?)\1/gm, '$2')

      // Remove inline code
      .replace(/`(.+?)`/g, '$1')

      // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
      .replace(/\n{2,}/g, '\n\n')
  } catch (e) {
    console.error(`Unable to run stripMarkdown due to error: ${e}`)
    return markdownContent
  }

  return output
}