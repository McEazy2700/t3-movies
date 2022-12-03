import Webtorrent from 'webtorrent'

// const opts = {
//   announce: announce,
//   maxWebConns: 5,
//   path: '/tmp/webtorrent/',
//   private: false,
//   storeCacheSlots: 20,
//   strategy: 'sequential'
// }

/**
* Fetches the torrent via the torrent url and sets the torrentUri via the callBack function
* @param torrentUrl {string} - the url for the torrent file
* @param callBack {()=> void} - a function that takes the proccessed magnetURI and uses it.
*/
export async function prepTorrent(torrentUrl: string, callBack: (uri: string) => void) {
  const client = new Webtorrent()
  fetch(torrentUrl).then(response => response.blob()).then(blob => {
    const torrentFile = new File([blob], 'temp-file.torrent')
    return client.add(torrentFile, torrent => {
      callBack(torrent.magnetURI)
    })
  })
}
