import Banner from "../Banner/Banner";
import MartialArt from "../MartialArt/MartialArt";

import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <MartialArt></MartialArt>
          
            
        </div>
    );
};

export default Home;