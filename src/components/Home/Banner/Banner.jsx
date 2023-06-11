
const Banner = () => {
  return (
    <div>
      <div className="carousel mt-4 md:mx-20 h-[550px]">
        <div id="item1" className="carousel-item  w-full">
          <img
            src="https://img.freepik.com/free-photo/karate-fighters_654080-1341.jpg?w=740&t=st=1686414560~exp=1686415160~hmac=1256bce31f1e8cb49040b9bdd16f384c09c04f7a520358eda7209de7704d5fac"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/two-young-fighters-kimono-training-martial-arts-gym_155003-5557.jpg?w=740&t=st=1686414615~exp=1686415215~hmac=3c5514e57b2ed8277bf1cd13065f51911659fbb98d239eec15d2687fa9ebfc30"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/karate-fighters-tatami-fighting-championship_654080-1910.jpg?w=740&t=st=1686414642~exp=1686415242~hmac=bead4f5a5bc41e3848d06cabd25829929073d557e7d493c5b7df31917f40c595"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/karate-girl-boy-with-black-belts_155003-9954.jpg?w=740&t=st=1686414709~exp=1686415309~hmac=0e4ae3d19cebcff554d6d3859989ce0ad332073748fd9cdb7c4c2286aaff0c4e"
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