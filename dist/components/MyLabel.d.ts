import './MyLabel.css';
export interface MyLabelProps {
    /**
   * Este es el mensaje a mostrar en la etiqueta
   */
    label: string;
    /**
   * Este es el tamaño de la etiqueta
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Este es color de la etiqueta
   */
    color: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
   * Mayuscula o no de la etiqueta
   */
    allCaps: boolean;
    /**
   * Que color de fuente usa
   */
    fontColor?: string;
    /**
 * Que background color usa
 */
    backgroundColor?: string;
}
export declare const Mylabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
