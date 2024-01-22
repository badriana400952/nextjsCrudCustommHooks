import axios from 'axios';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface UseFormProps {
  initialValues: Record<string, string>;
  onSubmit: (data: Record<string, string>) => Promise<void>;
}

const useForm = ({ initialValues, onSubmit }: UseFormProps) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("api/playlist")
    setData(res.data.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData(initialValues);
  };

  return {
    formData,
    data,
    getData,
    handleChange,
    handleSubmit,
    setFormData,

  };
};

export default useForm;
