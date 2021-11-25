

const Form = () => {
    return (
        <form>
            <label>If you have any questions please send us a message</label>
            <input id="name" type='text' placeholder="Name and Surname" />
            <input id="email" type='email' placeholder="E-mail" />
            <input id="number" type='text' placeholder="Phone number" />
            <textarea id="textarea" cols="10" rows="8" placeholder="Describe your message..."></textarea>
            <button type="submit" className="submit-btn">send message</button>
        </form>
    )
}

export default Form