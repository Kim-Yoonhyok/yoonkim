import './ContactStyles.css'

function Contact () {
    return (
        <section id='contact'>
            <div className='contact'>
                <h1 className='title'>Contact Form</h1>
                <p>Feel free to contact me for any questions, inquiries, or if you just want to chat</p>
                <form>
                    <label for='name'>Name:</label>
                    <input type='text' id='name' name='name'></input>
                    <label for='email'>Email:</label>
                    <input type='email' id='email' name='email'></input>
                    <label for='message'>Message:</label>
                    <textarea id='message' name='message'></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
