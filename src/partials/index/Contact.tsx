'use client';

import { useRef, useState } from 'react';
import { InputLabel } from '@/components/form/InputLabel';
import { TextArea, TextInput } from '@/components/form/TextInput';
import type { FormEvent } from 'react';
import { Button } from '@/components/form/Button/Button';

export const Contact: React.FC = () => {
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        const form = formRef.current;
        if (!form) return;

        const name = form.fullName.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const content = form.content.value;

        setIsSubmitting(true);
        try {
            await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({ email, name, subject, content }),
                headers: {
                    'content-type': 'application/json',
                },
            });

            setMessage('Email enviado com sucesso!');
        } catch (e) {
            setMessage('Não foi possível enviar o email');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section
            id="contato"
            className="px-7 pt-6 pb-4 mb-6 mt-24 shadow-xl rounded-md bg-zinc-800/25"
        >
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-2">
                Entre em contato
            </h2>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="py-4 grid md:grid-cols-2 gap-y-6 gap-x-4"
            >
                <InputLabel>
                    Nome
                    <TextInput
                        required
                        name="fullName"
                        placeholder="Qual é o seu nome?"
                    />
                </InputLabel>
                <InputLabel>
                    Email
                    <TextInput
                        type="email"
                        name="email"
                        required
                        placeholder="Insira o seu email"
                    />
                </InputLabel>
                <InputLabel>
                    Assunto
                    <TextInput
                        required
                        name="subject"
                        placeholder="Qual o motivo do contato?"
                    />
                </InputLabel>
                <InputLabel>
                    Mensagem
                    <TextArea
                        required
                        name="content"
                        rows={3}
                        placeholder="Digite a sua mensagem"
                        className="col-span-2"
                    />
                </InputLabel>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="justify-self-end md:col-start-2"
                    variants={{ style: 'outlined' }}
                >
                    Enviar
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Button>
            </form>
            {message.length > 0 && <p>{message}</p>}
        </section>
    );
};
