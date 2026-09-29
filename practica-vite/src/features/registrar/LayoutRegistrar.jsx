import {useState} from "react";
import {Registrar} from "./registrar/registrar";

export function LayoutRegistrar() {
    const [participants, setParticipants] = useState([])
    const [participantCount, setParticipantCount] = useState(0)

    return (
        <>
            <Registrar
                participants={participants}
                participantCount={participantCount}
                setParticipants={setParticipants}
                setParticipantCount={setParticipantCount}
            />
        </>
    );
}

export default LayoutRegistrar;

