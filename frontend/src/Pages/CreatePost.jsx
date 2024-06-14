const CreatePost = ({ close }) => {
    return (
        <>
            <div className="form__wrapper">
                <form className="form form-popup">

                    <button
                        className="form-close-btn"
                        onClick={close}>
                        close
                    </button>

                    <div className="form__control">
                        <div className="filePicker">
                            <label htmlFor="upload">
                                + Add Files
                            </label>
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

                        <label htmlFor="nft_switcher">
                            <input
                                type="checkbox"
                                name="nft_switcher"
                                id="nft_switcher"
                                placeholder="This Post is an NFT"
                            />
                            This Post is an NFT
                        </label>


                        <button className="form__control-submit btn">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreatePost;