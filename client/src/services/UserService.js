import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('streams')
    },
    show (streamId) {
        return Api().get('stream/' + streamId)
    },
    post (stream) {
        return Api().post('stream', stream)
    },
    put (stream) {
        return Api().put('stream/' + stream.id, stream)
    },
    delete (stream) {
        return Api().delete('stream/' + stream.id, stream)
    }
}