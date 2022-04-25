import React from "react";
import styles from "../../styles/portabilidad.module.css";
import dataPortabilidad from "../../data/portabilidad.json";
import BanderaColombia from "../../assets/icons/Colombia.svg";
import Banderas from "../../assets/icons/Banderas.svg";

const Portabilidad = () => {
  const { socialNetworks } = dataPortabilidad;
  const { plans } = dataPortabilidad;

  return (
    <div className={styles.new_lineMobile}>
      <div className={styles.new_lineMobile_plans}>
        {plans.map((plan) => (
          <div key={plan.id} className={styles.new_lineMobile_plan}>
            <div className={styles.description}>
              <p>
                ¡Nuevo! <strong>Recomendado</strong>
              </p>
            </div>
            <div className={styles.bonds}>
              <div className={styles.bonds_item}>
                <p>
                  <strong>Bono de bienvenida</strong>
                </p>
                <p>
                  <b>{plan.bonoGb} GB</b>
                </p>
                <p>Vigencia {plan.vigenciaBono} días</p>
              </div>
              <div className={styles.bonds_item}>
                <p>
                  <strong>Doble de datos</strong>
                </p>
                <p className="relative">
									<span className={`${styles.sizeDatos} absolute`}>{plan.datos} GB</span>
                  <b>{plan.dobleDatos} GB</b>
                </p>
                <p>Vigencia {plan.vigenciaDatos} días</p>
              </div>
            </div>
            <div className={styles.apps}>
              {socialNetworks.map((icon) => (
                <img key={icon.name} src={icon.image} alt={icon.name} />
              ))}
              <p>
                Apps <strong>ilimitadas</strong>
              </p>
            </div>
            <div className={styles.minutes}>
              <img src={BanderaColombia} alt="" />
              <p>
                Minutos y SMS {" "}
                <strong>ilimitados a todo operador</strong>
              </p>
            </div>
            <div className={styles.flags}>
              <img src={Banderas} alt="" />
              <p>
                <strong>{plan.minutos} Minutos</strong> larga distancia internacional
              </p>
            </div>
            <div className={styles.box_price}>
              <div className={styles.price}>
                <p>
                  <strong>{plan.precio}</strong>
                </p>
              </div>
              <div className={styles.shop}>
                <a
                  href="https://mimovistar.movistar.co/cwp/baas/selfservice/html/offer/mainoffer.html?offeringId=11zu000000j6M3lQSfmS&amp;utm_source=web&amp;utm_medium=escalera&amp;utm_campaign=lineanu15&amp;utm_term=prepago#/mainoffer"
                  tabindex="0"
                >
                  Comprar ahora
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portabilidad;
