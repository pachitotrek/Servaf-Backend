import { Request, Response } from "express";
import { std } from 'mathjs'


export default class CalculosController {

    static prueba(req: Request, res: Response) {
    }

    static Vis_Volumen_indicado(Vis: any, item: any) {
        return new Promise((resolve, reject) => {
            //Instrumento           
            let error_vol_trazo = item.error_indicacion || 0.001;
            let error_vol_trazo_anterior = item.error_indicacion_anterior || 0.002;
            let uvolumen = item.incertidumbre || 0.0013;
            let factor_cubrimiento = item.factor_cubrimiento || 2;


            // let error_vol_trazo = 0.001 ;
            // let error_vol_trazo_anterior = 0.002;
            // let uvolumen = 0.0013;         
            // let factor_cubrimiento =2;  

            let derivada = Math.abs(error_vol_trazo - error_vol_trazo_anterior);
            //FIN DATOS INSTRUMENTO

            //Vis Volumen indicado en la escala de cuello del RVM recogida al final de la medicion
            let vis = (uvolumen) / (factor_cubrimiento);
            let Dve = (derivada) / (2 * Math.sqrt(3));
            let factor_cobertura = 1;
            let rectangular = 1;
            let vis_factor_cobertura = Math.pow((vis * factor_cobertura), 2);
            let Dve_rectangular = Math.pow((Dve * rectangular), 2);
            let ucVs = Math.sqrt(vis_factor_cobertura + Dve_rectangular);
            resolve(ucVs);
        });
    }
    static ts_temperatura_rvm(tmax: any, tmin: any, item: any) {

        return new Promise((resolve, reject) => {
            //PRUEBA
            let t_max = tmax;
            let t_min = tmin;

            //INSTRUMENTO
            let incertidumbre_equipo = item.incertidumbre || 0.071; //1
            let resolucion = item.division_escala || 0.005;
            let factor_cubrimiento = item.factor_cubrimiento || 2;
            let error_t_actual = item.error_indicacion || 1.842;
            let error_t_anterior = item.error_indicacion_anterior || 3.078;

            // let incertidumbre_equipo = 0.071; //1
            // let resolucion = 0.005;
            // let factor_cubrimiento = 2;   
            // let error_t_actual = 1.842;
            // let error_t_anterior = 3.078;

            let derivada = Math.abs(error_t_actual - error_t_anterior);

            //ts temperatura del agua en el R.V.M

            let factor_cobertura = 1;
            let rectangular = 1;
            let ts = (incertidumbre_equipo) / (factor_cubrimiento);
            let Rts = (resolucion) / (Math.sqrt(3));
            let Dts = (derivada) / (2 * Math.sqrt(3));
            let deltats = ((t_max - t_min)) / (2 * Math.sqrt(3));
            let ts_factor_cobertura = Math.pow((ts * factor_cobertura), 2);
            let Rts_rectangular = Math.pow((Rts * rectangular), 2);
            let Dts_rectangular = Math.pow((Dts * rectangular), 2);
            let ts_rectangular = Math.pow((deltats * rectangular), 2);

            let ucts = Math.sqrt(ts_factor_cobertura + Rts_rectangular + Dts_rectangular + ts_rectangular);
            resolve(ucts);
        });


    }
    static tx_temperatura_agua(tmax: any, tmin: any, item: any) {

        return new Promise((resolve, reject) => {
            //PRUEBA
            let t_max = tmax;
            let t_min = tmin;

            //INSTRUMENTO
            let incertidumbre_equipo = item.incertidumbre || 0.23; //1
            let factor_cubrimiento = item.factor_cubrimiento || 2;  
            let error_t_actual = item.error_indicacion || -0.97 ;
            let error_t_anterior = item.error_indicacion_anterior || -1.193;
            let resolucion = item.division_escala || 0.005;


            // let incertidumbre_equipo = 0.23; //1
            // let factor_cubrimiento = 2;
            // let error_t_actual = -0.97;
            // let error_t_anterior = -1.193;
            // let resolucion = 0.005;

            let derivada = Math.abs(error_t_actual - error_t_anterior);

            //tx temperatura del agua en la entrada

            let factor_cobertura = 1;
            let rectangular = 1;
            let tx = (incertidumbre_equipo) / (factor_cubrimiento);
            let Rtx = (resolucion) / (Math.sqrt(3));
            let Dtx = (derivada) / (2 * Math.sqrt(3));
            let deltatx = ((t_max - t_min)) / (2 * Math.sqrt(3));
            let tx_factor_cobertura = Math.pow((tx * factor_cobertura), 2);
            let Rtx_rectangular = Math.pow((Rtx * rectangular), 2);
            let Dtx_rectangular = Math.pow((Dtx * rectangular), 2);
            let tx_rectangular = Math.pow((deltatx * rectangular), 2);

            let uctx = Math.sqrt(tx_factor_cobertura + Rtx_rectangular + Dtx_rectangular + tx_rectangular);

            resolve(uctx);
        });


    }
    static px_presion_entrada(pmax: any, pmin: any, item: any) {

        return new Promise((resolve, reject) => {

            //PRUEBA
            let p_max = pmax;
            let p_min = pmin;

            //INSTRUMENTO
            let incertidumbre_equipo =  item.incertidumbre || 1.6;
            let resolucion = item.division_escala || 0.05;
            let factor_cubrimiento = item.factor_cubrimiento || 2; 
            let error_p_actual = item.error_indicacion || -0.2 ;
            let error_p_anterior =item.error_indicacion_anterior || -0.6;
            // let incertidumbre_equipo = 1.6; //1
            // let resolucion = 0.05;
            // let factor_cubrimiento = 1.65;
            // let error_p_actual = -0.2;
            // let error_p_anterior = -0.6;

            let derivada = Math.abs(error_p_actual - error_p_anterior);



            //Px Presion del agua en la entrada

            let factor_cobertura = 1;
            let rectangular = 1;
            let px = (incertidumbre_equipo) / (factor_cubrimiento);
            let Rpx = (resolucion) / (Math.sqrt(3));
            let Dpx = (derivada) / (2 * Math.sqrt(3));
            let deltapx = ((p_max - p_min)) / (2 * Math.sqrt(3));
            let px_factor_cobertura = Math.pow((px * factor_cobertura), 2);
            let Rpx_rectangular = Math.pow((Rpx * rectangular), 2);
            let Dpx_rectangular = Math.pow((Dpx * rectangular), 2);
            let px_rectangular = Math.pow((deltapx * rectangular), 2);

            let ucPx = Math.sqrt(px_factor_cobertura + Rpx_rectangular + Dpx_rectangular + px_rectangular);

            resolve(ucPx);
        });
    }
    static vx_volumen_medidor(vx: any, Ts: any, Tx: any, px: any, vpro: any, Ttanque: any, Tagua: any,
        Pentrada: any, item: any, vis: any, parametros: any) {

        return new Promise(async (resolve, reject) => {
            //PRUEBA
            let Promedio_volumen = vpro;
            let temp_tanque = Ttanque;
            let temp_linea = Tagua;
            let pentrada = Pentrada;
            let plibre = 0;

            //Instrumento
            let udiv_escala =item.incertidumbre_escala || 0;   
            let div_escala =item.division_escala || 0.0020;
            let correcion_escala =item.correcion_escala || 0;

            let volumen_al_trazo = vis;
            // 


            let ias = parametros.incertidumbre_rvm;
            let iaw = parametros.incertidumbre_agua;
            let ikw = parametros.incertidumbre_compre_agua;
            //PARAMETROS DEFAULT
            let coef_rvm = parametros.coef_rvm;
            let coef_agua = parametros.coef_agua;
            let compre_agua = parametros.compre_agua;

            let Vx = vx;
            let c = Math.pow((udiv_escala) / (Math.sqrt(3)), 2);
            let b = Math.abs((volumen_al_trazo - Promedio_volumen) / (div_escala));
            let Evis = Math.sqrt((c * b));
            let f_c_vx = (1 + (coef_rvm * (temp_tanque - 20))) * (1 + coef_agua * (temp_linea - temp_tanque)) * (1 - compre_agua * (pentrada - plibre));
            //======================================================================
            let sumaVx = Math.pow(Vx * f_c_vx, 2) + Math.pow(Evis * f_c_vx, 2);
            //===================================================================
            //DEPURADO
            //=====================================================
            let as = (ias) / (Math.sqrt(3));
            let rc_as = (volumen_al_trazo + correcion_escala) * (temp_tanque - 20) * (1 + coef_agua * (temp_linea - temp_tanque)) * (1 - compre_agua * (pentrada - plibre));
            //==========================================================================
            let sumaAs = Math.pow(as * rc_as, 2);
            //======================================================================
            //DEPURADO  
            //======================================================================

            let ts = Ts;
            let fc_ts = (volumen_al_trazo + correcion_escala) * (1 - compre_agua * (pentrada - plibre)) * (-coef_agua + coef_rvm * (1 + coef_agua * (temp_linea - ((2 * temp_tanque) + 20))));

            //========================================================================
            let sumats = Math.pow(ts * fc_ts, 2);
            //========================================================================
            //
            //POSIBLE ERROR
            //

            let aw = (iaw) / (Math.sqrt(3));
            let rc_aw = (volumen_al_trazo + correcion_escala) * (1 + coef_rvm * (temp_tanque - 20)) * (temp_linea - temp_tanque) * (1 - compre_agua * (pentrada - plibre));
            //=========================================================================
            let sumaAw = Math.pow(aw * rc_aw, 2);
            //=========================================================================     
            //======================================================================
            //DEPURADO  
            //======================================================================     

            let tx = Tx;
            let fc_tx = (volumen_al_trazo + correcion_escala) * (1 + coef_rvm * (temp_tanque - 20)) * (coef_agua) * (1 - compre_agua * (pentrada - plibre));
            //====================================================================
            let sumatx = Math.pow(tx * fc_tx, 2);
            //====================================================================
            //
            //POSIBLE ERROR
            //

            let kw = (ikw) / (Math.sqrt(3));
            let rc_kw = (volumen_al_trazo + correcion_escala) * (1 + coef_rvm * (temp_tanque - 20)) * (1 + coef_agua * (temp_linea - temp_tanque)) * (-(pentrada - plibre));
            //==================================================================================
            let sumaKw = Math.pow(kw * rc_kw, 2);
            //==================================================================================

            let Px = px;
            let fc_Px = (volumen_al_trazo + correcion_escala) * (1 + coef_rvm * (temp_tanque - 20)) * (1 + coef_agua * (temp_linea - temp_tanque)) * (-compre_agua);

            //======================================================================================================            
            let sumaPx = Math.pow(Px * fc_Px, 2);
            //======================================================================================================

            let p_aire_libre = 0;
            let ucVx = Math.sqrt(sumaVx + sumaAs + sumats + sumaAw + sumatx + sumaKw + sumaPx + p_aire_libre)
            resolve(ucVx);
        });
    }
    static async Ex_error_relativo(vx: any, vpro: any, vime: any, escala: any) {

        return new Promise(async (resolve, reject) => {

            let division_escala_medidor = escala;
            let volumen_promedio = vpro;
            let volumen_indicador_medidor = vime;


            let EvisX1 = (division_escala_medidor) / (2 * Math.sqrt(3));
            let rc_ex = (1 / volumen_promedio);
            let rc_ex2 = (-1 / volumen_promedio);

            let ex_rc_ex = Math.pow(EvisX1 * rc_ex, 2);
            let ex_rc_ex2 = Math.pow(EvisX1 * rc_ex2, 2);

            let ucVx: any = vx;

            let rc_vx = volumen_indicador_medidor / Math.pow(volumen_promedio, 2);

            let vx_rc_vx = Math.pow(ucVx * rc_vx, 2);

            let ucEx = Math.sqrt(ex_rc_ex + ex_rc_ex2 + vx_rc_vx);

            resolve(ucEx)

        });
    }
    static ExAv_error_repetivilidad(Pruebas: any, Errores: any, Ex: any) {

        return new Promise(async (resolve, reject) => {

            let pruebas = Pruebas;
            let errores = Errores;

            let ex = (std(errores)) / (Math.sqrt(pruebas));

            let EEx = Ex;
            let Exav = Math.sqrt((Math.pow(ex * 1, 2) + Math.pow(EEx * 1, 2)));

            let UE = (Exav) * 2;

            resolve(UE);
        });
    }















}






