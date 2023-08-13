import Image from "next/image";
import ContactForm from "./ContactForm";

export default function GetStartedComp() {
    console.log(studentName);

    function getStudentName() {
        return "IBK";
    }
    const studentName = getStudentName();
    return (
        <div className="h-screen">
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="flex justify-between items-center">
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
