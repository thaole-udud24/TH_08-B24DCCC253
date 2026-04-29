const photos = [
  'https://picsum.photos/seed/about-1/300/220',
  'https://picsum.photos/seed/about-2/300/220',
  'https://picsum.photos/seed/about-3/300/220',
  'https://picsum.photos/seed/about-4/300/220',
];

export default function PhotoGrid() {
  return (
    <div className="photo-grid">
      {photos.map((item) => (
        <img key={item} src={item} alt="profile" />
      ))}
    </div>
  );
}