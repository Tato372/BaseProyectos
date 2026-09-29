import { REGISTRAR_TEXT } from "../constants/registrar.constants";

export function useRegistrar(participants, participantCount, setParticipants, setParticipantCount) {

    const registerParticipant = (event) => {
        event.preventDefault();
        const participantName = event.target.participantName.value.trim();

        if (participantName === "") {
            alert("El nombre del participante no puede estar vacío o ser solo espacios.");
            return;
        }
        if (participants.length >= REGISTRAR_TEXT.MAX_PARTICIPANT) {
            alert("Se ha alcanzado el máximo de participantes" + REGISTRAR_TEXT.MAX_PARTICIPANT);
            return;
        }
        if (participants.includes(participantName)) {
            alert("El participante ya está registrado.");
            return;
        }
        setParticipants([...participants, participantName]);
        setParticipantCount(participantCount + 1);
        
    };

    return { registerParticipant };
}

export default useRegistrar;