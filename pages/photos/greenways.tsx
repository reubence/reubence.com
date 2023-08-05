const pictures = [
  'https://github.com/bitprj/art-heist/assets/69332964/54c4c8dc-08c7-4281-95cd-414342a35496',
  'https://github.com/bitprj/art-heist/assets/69332964/146b345b-21a2-4b02-917e-731e77e31bab',
  'https://github.com/bitprj/art-heist/assets/69332964/c743cad1-0daa-491d-8697-6e862ca05f21',
  'https://github.com/bitprj/art-heist/assets/69332964/48cff727-9d49-4b25-b8ea-5c5c580dc2f2',
  'https://github.com/bitprj/art-heist/assets/69332964/73560513-0410-4230-8557-eb92aad91a34',
  'https://github.com/bitprj/art-heist/assets/69332964/6c468e5c-910a-424a-bb11-a6f76f92dd7e',
  'https://github.com/bitprj/art-heist/assets/69332964/a6ab398a-e423-4ac1-94e2-f9f3d6d4c61f',
  'https://github.com/bitprj/art-heist/assets/69332964/def56784-88fd-4dfb-8f75-c018e8dc1339',
  'https://github.com/bitprj/art-heist/assets/69332964/92b1eb94-f17b-4dce-8cd7-97c19fceeb83',
]

export default function Birds() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          nc scenes
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          mountains, lakes, rivers, clay soil!
        </p>
      </div>
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
