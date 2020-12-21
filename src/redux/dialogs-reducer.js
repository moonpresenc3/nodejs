const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState= {
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are" },
            { id: 3, message: "You man" },
        ],
        dialogs: [
            { id: 1, name: "Ivan" },
            { id: 2, name: "Dmitry" },
            { id: 3, name: "Stas" },
        ],
        newMessageBody: "",
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            break;
    }


    return state;
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text,
    };
};



export default dialogsReducer;