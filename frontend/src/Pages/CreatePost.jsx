const CreatePost = ({ close }) => {
    return (
        <>
            <form className="form form-popup">
                <button onClick={close}>close</button>
                <div className="form__control">
                    <div className="filePicker">
                        <label htmlFor="upload"> + Add Files</label>
                        <input
                            type="file"
                            name="upload"
                            id=""
                        />
                    </div>

                    <textarea
                        type="text"
                        name=""
                        id=""
                        placeholder="Your Caption here ..."
                    />
                    <button className="btn">Post</button>
                </div>
            </form>
        </>
    )
}

export default CreatePost;