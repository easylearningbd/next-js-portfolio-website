import mongoose from "mongoose";

const ExperinceSchema = new mongoose.Schema(
    {
        position: String,
        company: String,
        duration: String,
        location: String,
        jobprofile: String, 
    },
    { timestamps: true }
);
const Experince = mongoose.models.Experince || mongoose.model("Experince",ExperinceSchema);
export default Experince;