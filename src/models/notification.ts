import getUniqueId from '../utils/getUniqueId'

enum Severity {
    WARNING = 'WARNING',
    INFO = 'INFO',
    ERROR = 'ERROR',
    NEUTRAL = 'NEUTRAL',
}

type SeverityType = keyof typeof Severity

class WCNotification {
    text: string
    severity: SeverityType
    confirmed: boolean
    timeout: number
    readonly createdAt: number
    private readonly id: string

    constructor(notification: WCNotification) {
        const { text, severity, confirmed, timeout = 5000 } = notification
        this.id = getUniqueId()
        this.createdAt = Date.now()
        this.text = text
        this.severity = severity
        this.confirmed = confirmed
        this.timeout = timeout
    }
}
