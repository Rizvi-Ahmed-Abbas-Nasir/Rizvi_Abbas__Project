import Image from "next/image"

export default function Partners() {
    return(
        <div className="PartnersContainer">
             <div className="PartnersContent">
                    <div className="PartnerTexts">
                        <div className="TextsOFPartners" >
                            <h1>Our Partners </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        </div>
                    </div>
                    <div className="PartnersIMGs">
                        <Image 
                        className="PartnerBox"
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner6.svg"
                        width={200}
                        height={90}
                        />
                        <Image 
                        className="PartnerBox"
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner1.svg"
                        width={200}
                        height={90}
                        />
                        <Image
                        className="PartnerBox" 
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner2.svg"
                        width={200}
                        height={90}
                        />
                        <Image
                        className="PartnerBox" 
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner3.svg"
                        width={200}
                        height={90}
                        />
                        <Image 
                        className="PartnerBox"
                        src="https://truelysell.dreamstechnologies.com/html/template/assets/img/partner/partner4.svg"
                        width={200}
                        height={90}
                        />
                    </div>
             </div>
        </div>
    )
};
