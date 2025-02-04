// transaction.model.ts

export class Transaction {
    _id: string;
    userId: string;
    paymentMethod?: string;
    provider?: string;
    issueTransaction: 'subscription' | 'one-time payment';
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed' | 'refunded';
    description?: string;
    transactionDate: Date;

    constructor(
        _id: string,
        userId: string,
        issueTransaction: 'subscription' | 'one-time payment',
        amount: number,
        currency: string,
        status: 'pending' | 'completed' | 'failed' | 'refunded',
        transactionDate: Date,
        paymentMethod?: string,
        provider?: string,
        description?: string
    ) {
        this._id = _id;
        this.userId = userId;
        this.issueTransaction = issueTransaction;
        this.amount = amount;
        this.currency = currency;
        this.status = status;
        this.transactionDate = transactionDate;
        this.paymentMethod = paymentMethod;
        this.provider = provider;
        this.description = description;
    }
}


// invoice.model.ts

export class Invoice {
    _id: string;
    transactionId: string;
    status: 'paid' | 'unpaid' | 'overdue';
    createdAt: Date;
    updatedAt: Date;

    constructor(
        _id: string,
        transactionId: string,
        status: 'paid' | 'unpaid' | 'overdue',
        createdAt: Date,
        updatedAt: Date
    ) {
        this._id = _id;
        this.transactionId = transactionId;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}


// subscription.model.ts

export class Subscription {
    _id: string;
    userId: string;
    type: 'Freemium' | 'Premium';
    startDate: Date;
    endDate: Date;
    status: 'active' | 'expired' | 'canceled';
    recurring: boolean;
    createAdt: Date;
    updatedAt: Date;

    constructor(
        _id: string,
        userId: string,
        type: 'Freemium' | 'Premium',
        startDate: Date,
        endDate: Date,
        status: 'active' | 'expired' | 'canceled',
        recurring: boolean,
        createAdt: Date,
        updatedAt: Date
    ) {
        this._id = _id;
        this.userId = userId;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.recurring = recurring;
        this.createAdt = createAdt;
        this.updatedAt = updatedAt;
    }
}
