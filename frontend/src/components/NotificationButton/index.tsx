import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
    saleId: number;
}

function handleClick(id : number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
            .then(response => {
                console.log("sucesso");
                toast.info("SMS enviado com sucesso");
            })    
}

function NotificationButton( {saleId} : Props) {     
    return(
      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
          <img src={icon} alt="Notificar" />
      </div>
    )
  }
  
  export default NotificationButton
  