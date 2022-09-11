import "./ContactPage.css"

function Contact() {
    return (
        <>
            <div>
                <form className="form--data" action="mailto:exo.silva.38@gmail.com"
                    enctype="multiplart/form-data" name="EmailForm">
                    Name:<br />
                    <input type="text" size="50" className="ContactName" name="ContactName" /><br /><br />
                    Subject:<br />
                    <input type="text" size="50" className="ContactSubject" name="ContactSubject" /><br /><br />

                    Message:<br />
                    <textarea className="ContactComment" name="ContactComment" rows="12" cols="36" /><br /><br />

                    <input type="submit" value="Submit" />

                </form>
            </div>

            <div className="contact--address">
                <h4>ADDRESS</h4><br />
                <p className="address--text">If you would like to contact us via letter or walk-in booking:</p>
                <div className="address">
                    <p>International House</p>
                    <p>Floor 3</p>
                    <p>1 St Katherine's Way</p>
                    <p>London</p>
                </div>
            </div>
        </>
    )
}

export default Contact;