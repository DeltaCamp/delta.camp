export const authorImages = function(author, data) {
  if (author === 'Chuck Bergeron') {
    return data.chuckProfilePic.childImageSharp.fixed
  } else if (author === 'Brendan Asselstine') {
    return data.brendanProfilePic.childImageSharp.fixed
  } else {
    console.warn('no photo found for author! ' + author)
    return ''
  }
}
