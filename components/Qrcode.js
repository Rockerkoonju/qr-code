import Image from "next/image"

const Qrcode = ({ ...rest }) => {

    return (
        <><Image
            {...rest}
            width={300}
            height={300}
        />
        </>
    )


}

export default Qrcode