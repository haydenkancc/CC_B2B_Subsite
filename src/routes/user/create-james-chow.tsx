import Create from "./create";

const referral = [
    { name: "Referral: James Chow" },
]

function CreateJamesChow() {
    return (
        <Create referral={referral} />
    )
}

export default CreateJamesChow;
