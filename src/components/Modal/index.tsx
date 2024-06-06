import React, { ReactNode, useEffect, forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { FaXRay } from 'react-icons/fa'

import styles from './styles.module.css';

export interface ModalHandles {
    handleOpenModal: () => void;
    handleChangeTitle: (title: ReactNode) => void;
    handleChangeContent: (content: ReactNode) => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> =  (props, ref) => {
    const [isVisible, setIsVisible] =  useState(false);
    const [title, setTitle] = useState<ReactNode>(null);
    const [content, setContent] = useState<ReactNode>(null);

    const modalRef = useRef<HTMLDivElement>(null);
    

    const handleOpenModal = useCallback(() =>{
        setIsVisible(true);
    }, [])

    const handleCloseModal = useCallback(() =>{
        setIsVisible(false);
    }, [])

    const handleChangeTitle = useCallback((title: ReactNode) => {
        setTitle(title);
    },[]);

    const handleChangeContent = useCallback((content: ReactNode) => {
        setContent(content);
    },[]);

    const handleClickOutside = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          // Clique fora do modal, fechar o modal
          handleCloseModal();
        }
      };

    useImperativeHandle(ref, () =>{
        return{
            handleChangeTitle,
            handleChangeContent,
            handleOpenModal
        }
    })

    function ListenerMouse(){
        // Adicionar um ouvinte de evento para verificar os cliques fora do modal
        document.addEventListener('mousedown', handleClickOutside);
    
        // Remover o ouvinte de evento quando o componente é desmontado
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }

    useEffect(() => {
        ListenerMouse();
      }, [ListenerMouse]);

    if(!isVisible){
        return null;
    }
    return(
        <div className={styles.container} >
            <div className={styles.content} ref={modalRef}>
                <div className={styles.header}>
                    <button onClick={handleCloseModal}>
                        <FaXRay
                            color='white'
                        />
                    </button>
                </div>
                
                {title}
                <p className={styles.contentDescription}>
                    {content}
                </p>
            </div>
        </div>
    );
}
export default forwardRef(Modal);