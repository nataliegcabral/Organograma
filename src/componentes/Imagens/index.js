const Imagens = ({onFileSelect}) => {

    return (
        <div className="file-uploader">
            <input type='file' onChange={handleFileInput} />

        </div>
    )
}

export default Imagens