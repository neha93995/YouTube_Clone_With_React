public class Jaja {
    public static void main(String args[])
    {

        int n=5;
        
        // int count=0;
        // for(int i=1; i<=n; i++)
        // {
        //     for(int j=1; j<i+count+1; j++)
        //     {
        //         System.out.print(j);
        //     }
        //     count++;
        //     System.out.println();
        // }


        // for(int i=1; i<=n; i++)
        // {

        //     for(int j=1; j<=n-i; j++)
        //     {
        //         System.out.print(" ");
        //     }

        //     for(int j=1; j<=(2*i)-1; j++)
        //     {
        //         System.out.print("*");
        //     }
        //     count++;
        //     System.out.println();
        // }


        
        // for(int i=1; i<=n; i++)
        // {
        //     int num =1;
        //     for(int j=1; j<=(2*i)-1; j++)
        //     {
        //         if(i-j>0)
        //         {
        //             System.out.print(num++);
        //         }
        //         else{
        //             System.out.print(num--);
        //         }
        //     }
        //     count++;
        //     System.out.println();
        // }


        for(int i=1; i<=n; i++)
        {
            for(int j=1; j<=n; j++)
            {
                if(i%2!=0)
                {
                    if(j==n)
                    {
                        System.out.print(i+1);
                    }
                    else{
                        System.out.print(i);
                    }
                }
                else{
                    if(j==1)
                    {
                        System.out.print(i+1);
                    }
                    else{
                        System.out.print(i);
                    }
                }
            }
            System.out.println();
        }

        for(int i=1; i<=n; i++)
        {
            if(i%2==0)
            {
                System.out.print(i+1);
            }
            for(int j=1; j<=n; j++)
            {
                System.out.print(i);
            }
            if(i%2!=0)
            {
                System.out.print(i+1);
            }
            System.out.println();
        }

    }
}
