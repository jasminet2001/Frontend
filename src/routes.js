import general from '@/routes/general';
import userPanel from "@/routes/userPanel";
import companyPanel from "@/routes/companyPanel";

export default [
    ...general,
    ...userPanel,
    ...companyPanel,
]