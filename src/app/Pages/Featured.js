
import Image from "next/image";

export default function Featured() {
    return(
        <div className="FeaturedContainer">
            <div className="FeatureContent">
                <div className="FeatureText">
                    <h1>Featured Categories</h1>
                    <p>What do you need to find?</p>
                </div>
                <div className="FeaturedBox">
                    <div className="FeaturedBoxes">
                        <div>
                            <Image 
                                src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/computer.svg"
                                width={100}
                                height={100}
                            />

                        </div>
                    </div>
                    <div className="FeaturedBoxes">
                    <Image 
                                src=" https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/construction.svg"
                                width={100}
                                height={100}
                            />
                   
                    </div>
                    <div className="FeaturedBoxes">
                    <Image 
                                src="  https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/painting.svg"
                                width={100}
                                height={100}
                            />
                   
                    </div>
                    <div className="FeaturedBoxes">
                    <Image 
                                src=" https://www.svgrepo.com/show/67430/paint-brush.svg"
                                width={100}
                                height={100}
                            />
                    </div>
                </div>
            </div>

        </div>
    );
    
};
