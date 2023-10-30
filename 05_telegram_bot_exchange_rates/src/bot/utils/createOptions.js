export function createOptions(options, msg) {
    return {
        ...options,
        reply_to_message_id: msg.reply_to_message_id,
    }
}
