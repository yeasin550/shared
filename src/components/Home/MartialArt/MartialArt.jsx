
const MartialArt = () => {
    return (
      <div
        className="hero sm:w-full h-[600px]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/young-woman-doing-karate_23-2148993567.jpg?w=826&t=st=1686309092~exp=1686309692~hmac=69604cb2c74df3587600317ad0f63c50811cfaa0984e4ea2456622e1fcb4331c') ",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-right ml-80 text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Martial Arts School in The City of New York
            </h1>
            <p className="mb-5">
              All camps are run by Coach Dante, owner and Chief Instructor, who brings nearly 30 years of teaching experience in martial arts + previous history as an educator. Coach Dante infuses life lessons into his classes and daily interactions to help inspire strong character development and a love of martial arts.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default MartialArt;

//  className="bg-[url('https://img.freepik.com/free-photo/young-woman-doing-karate_23-2148993567.jpg?w=826&t=st=1686309092~exp=1686309692~hmac=69604cb2c74df3587600317ad0f63c50811cfaa0984e4ea2456622e1fcb4331c')] h-screen


// style={{
//           backgroundImage:
//             "url('https://img.freepik.com/free-photo/young-woman-doing-karate_23-2148993567.jpg?w=826&t=st=1686309092~exp=1686309692~hmac=69604cb2c74df3587600317ad0f63c50811cfaa0984e4ea2456622e1fcb4331c')",
//         }}