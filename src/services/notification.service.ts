class NotificationService {
    static id = 1

    private static _instance: NotificationService

    constructor() {
        NotificationService.id = 1
    }

    public static getInstance(): NotificationService {
        if (!NotificationService._instance) {
            NotificationService._instance = new NotificationService()
        }

        return NotificationService._instance
    }
}

export default NotificationService.getInstance()
