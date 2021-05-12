import Colors from "../colors/Colors"
import { IOverview } from "../redux/reducers/summaryReducer"


export const mappedData = (overview: IOverview) => {
    return [
        {
            name: 'Revenues',
            icon: 'money',
            value: overview.total_revenue,
            isMoney: true,
            growth: overview.change.revenue,
            color: Colors.accent
        }, {
            name: 'Transactions',
            icon: 'account-tree',
            value: overview.total_transactions,
            isMoney: false,
            growth: parseFloat(overview.change.transactions),
            color: Colors.primary
        },{
            name: 'Customers',
            icon: 'groups',
            value: overview.total_customers,
            isMoney: false,
            growth: overview.change.customer,
            color: Colors.secondary
        },{
            name: 'Expense',
            icon: 'account-balance',
            value: overview.total_expense,
            isMoney: true,
            growth: overview.change.expense,
            color: Colors.tertiary
        },{
            name: 'Profit',
            icon: 'attach-money',
            value: overview.total_profit,
            isMoney: true,
            growth: overview.change.profit,
            color: Colors.accent
        }
    ]
}