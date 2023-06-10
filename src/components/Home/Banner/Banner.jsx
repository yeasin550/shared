
const Banner = () => {
  return (
    <div>
      <div className="carousel md:mx-20 h-[550px]">
        <div id="item1" className="carousel-item  w-full">
          <img
            src="https://img.freepik.com/free-photo/kids-fashion-concept-group-teen-boys-girls-sitting-green-grass-park_155003-32286.jpg?w=740&t=st=1686136639~exp=1686137239~hmac=aa36b211509a14b695049ef6d327defd1830b67971fb7d630b0a6932e465432b"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/front-view-trainer-talking-players_23-2149742084.jpg?w=740&t=st=1686136671~exp=1686137271~hmac=47e0bcab00e88144c44ad498d1dc97ab2d95e4f25112498291139f99f0925269"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/football-trainer-teaching-his-pupils_23-2149707985.jpg?w=740&t=st=1686136691~exp=1686137291~hmac=3aef78a0b75b4b7c22ada17cf13998c3c2538bb4aae035a04bf2d9e5a3919154"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/football-trainer-teaching-his-pupils_23-2149708050.jpg?w=740&t=st=1686136721~exp=1686137321~hmac=bb113e6b05acef2dc3cc329721bce066e38f9a176e3833ce5e59089ef7a22a86"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;