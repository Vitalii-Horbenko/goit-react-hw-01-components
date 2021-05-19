import React from 'react'
import style from './TransactionHistory.module.css'


const TransactionHistory = ({items}) => {
    return (
        <div>
            <table className={style.transactionHistory}>
  <thead>
    <tr className={style.head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

                <tbody>
                    {items.map(({id, type, amount, currency}) => 
                        <tr key={id} className={style.transactions}>
      <td className={`${style.item} ${style.type}`}>{type}</td>
      <td className={style.item}>{amount}</td>
      <td className={style.item}>{currency}</td>
    </tr>
                    )}
    
  </tbody>
</table>
        </div>
    )
}

export default TransactionHistory
