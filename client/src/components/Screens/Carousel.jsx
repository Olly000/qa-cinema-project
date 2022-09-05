const Carousel = () => {
return(
    <div id="carousel">

        <div id="#leftArrowOuterBox" class="arrowOuterBox centeredContent">
            <div id="leftArrow" class="arrow">
                <div id="leftArrowTop" class="arrowPart"></div>
                <div id="leftArrowBottom" class="arrowPart"></div>
            </div>
        </div>

        <div id="screensBox">
            <div id="screen1Box" class="screenBox">
                <div id="screen1DescriptionBox" class="screenDescriptionBox">
                    <h3>Standard Screen</h3>
                    <p>Our standard screens seats over 200 guests and provides an excellent viewing experience</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Sala_de_cine.jpg"
                        alt="Standard screen decor" />
                </div>

                <div id="screen1ImageBox" class="screenImageBox">
                    <img src="https://homemcr.org/app/uploads/2015/04/Cinema-1-Seating-Plan.jpg"
                        alt="Standard seating plan" />


                </div>
            </div>

            <div id="screen2Box" class="screenBox">
                <div id="screen2DescriptionBox" class="screenDescriptionBox">
                    <h3>Deluxe "Director's Box" Screen</h3>
                    <p>Our deluxe "Director's Box" screen is for those really special ocasions. With a more intimate
                        experience for those who like the finer things. Room service is provided for our exclusive
                        teir
                        of guest.</p>
                    <img
                        src="https://robbreport.com/wp-content/uploads/2019/06/future-home-imax-e1561146252564.png?w=1000" />
                </div>
                <div id="screen2ImageBox" class="screenImageBox">
                    <img src="https://homemcr.org/app/uploads/2015/04/Cinema-4.jpg" alt="Deluxe seating plan" />

                </div>
            </div>
        </div>


        <div id="#rightArrowOuterBox" class="arrowOuterBox centeredContent">
            <div id="rightArrow" class="arrow">
                <div id="rightArrowTop" class="arrowPart"></div>
                <div id="rightArrowBottom" class="arrowPart"></div>
            </div>
        </div>
    </div>
);
}
export default Carousel;