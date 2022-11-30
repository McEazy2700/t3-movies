import Webtorrent from 'webtorrent'

// const opts = {
//   announce: announce,
//   maxWebConns: 5,
//   path: '/tmp/webtorrent/',
//   private: false,
//   storeCacheSlots: 20,
//   strategy: 'sequential'
// }


export async function prepTorrent (torrentUrl: string, callBack: (uri: string) => void){
  const client = new Webtorrent()
  fetch(torrentUrl).then(response => response.blob()).then(blob => {
    const torrentFile = new File([blob], 'temp-file.torrent')
    return client.add(torrentFile, torrent => {
      callBack(torrent.magnetURI)
    })
  })
}
