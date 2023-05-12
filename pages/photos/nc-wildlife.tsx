const pictures = [
  'https://github.com/bitprj/art-heist/assets/69332964/90d6e9c1-cced-4d93-958f-c49c17e0eb1d',
  'https://github.com/bitprj/art-heist/assets/69332964/fb09002e-2e47-4900-90e8-3f0710c93f13',
  'https://github.com/bitprj/art-heist/assets/69332964/1b770c44-adec-48b1-9784-a7b08da27826',
  'https://github.com/bitprj/art-heist/assets/69332964/bbd1bbf7-020b-4e7d-b30a-46cd88904fb0',
  'https://github.com/bitprj/art-heist/assets/69332964/f7d4b0b3-b4ee-468e-ae36-c3a6cf8594cf',
  'https://github.com/bitprj/art-heist/assets/69332964/165924d2-8789-4197-b491-3cc903d9a635',
  'https://github.com/bitprj/art-heist/assets/69332964/4fd882b7-405f-4250-bca6-f6f331774f09',
  'https://github.com/bitprj/art-heist/assets/69332964/8bb9727a-574a-427c-9295-ec0458920abb',
  'https://github.com/bitprj/art-heist/assets/69332964/5b5890f5-0313-4854-b190-3babff0822f6',
  'https://github.com/bitprj/art-heist/assets/69332964/edc22610-8925-4d75-8579-da6670895241',
]

export default function Birds() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {pictures.map((url) => (
          <div key={url} className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
