class EventBus implements IEventBus {
  private static instance?: EventBus = undefined
  private subscribers: Subscriber
  private static nextId = 0

  private constructor () {
    this.subscribers = {}
  }

  public static getInstance (): EventBus {
    if (this.instance === undefined) {
      this.instance = new EventBus()
    }

    return this.instance
  }

  public on (event: string, cb: Function): Registry {
    const id = this.getNextId()

    if (!this.subscribers[event]) {
      this.subscribers[event] = {}
    }

    this.subscribers[event][id] = cb

    return {
      unregister: () => {
        delete this.subscribers[event][id]

        if (Object.keys(this.subscribers[event]).length === 0) {
          delete this.subscribers[event]
        }
      }
    }
  }

  public emit<T> (event: string, args?: T): void {
    const subscriber = this.subscribers[event]

    if (subscriber === undefined) {
      return
    }

    Object.keys(subscriber).forEach((key) => {
      subscriber[key](args)
    })
  }

  private getNextId (): number {
    return EventBus.nextId++
  }
}

export default EventBus
