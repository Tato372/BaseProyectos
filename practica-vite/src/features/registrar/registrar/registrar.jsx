import {useRegistrar} from "../hooks/useRegistrar";
import {REGISTRAR_TEXT} from "../constants/registrar.constants"

export function Registrar({ participants, participantCount, setParticipants, setParticipantCount}) {
    const {registerParticipant} = useRegistrar(participants, participantCount, setParticipants, setParticipantCount);
    
    return (
        <>
            <h1>Registro de Participantes</h1>
            <form onSubmit={registerParticipant}>
                <input type="text" name="participantName" placeholder={REGISTRAR_TEXT.NAME} />
                <button type="submit">{REGISTRAR_TEXT.LOGIN}</button>
            </form>
            <h2>{REGISTRAR_TEXT.PARTICIPANTS}: {participantCount}</h2>
            <h2>{REGISTRAR_TEXT.AVAILABLE}: {5 - participantCount}</h2>
            <ul>
                {participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
        </>
    );
}