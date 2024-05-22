interface FormButtonProps {
    loading: boolean;
    text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
    return (
        <button
            disabled={loading}
            className="primary-btn h-9"
        >
            {loading ? "Loading" : text}
        </button>
    );
}