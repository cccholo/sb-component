import './MyLabel.css'

export interface MyLabelProps{
    /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label:string;
    /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal'|'h1'|'h2'|'h3';
    /**
   * Este es color de la etiqueta
   */
  color: 'text-primary'|'text-secondary'|'text-tertiary';
    /**
   * Mayuscula o no de la etiqueta
   */
  allCaps:boolean;
    /**
   * Que color de fuente usa
   */
  fontColor?: string;
      /**
   * Que background color usa
   */
  backgroundColor?: string;
}


export const Mylabel = ({
  label='No Label',
  size= 'normal',
  allCaps = true,
  color='text-primary',
  fontColor,
  backgroundColor='transparent',
}:MyLabelProps) => {
  return (
    <span 
    className={` label ${ size } ${ color }  `}
    style={{ color:fontColor, backgroundColor:backgroundColor }}
    >
      { allCaps ? label.toUpperCase() : label }</span>
  )
}
