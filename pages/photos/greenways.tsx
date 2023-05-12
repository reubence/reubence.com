const pictures = [
  'https://github.com/bitprj/art-heist/assets/69332964/54c4c8dc-08c7-4281-95cd-414342a35496',
  'https://github.com/bitprj/art-heist/assets/69332964/146b345b-21a2-4b02-917e-731e77e31bab',
  'https://github.com/bitprj/art-heist/assets/69332964/48cff727-9d49-4b25-b8ea-5c5c580dc2f2',
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
                key={url}
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
