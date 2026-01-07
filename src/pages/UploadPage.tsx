import { useState } from 'react'
import { IKContext, IKUpload } from 'imagekitio-react'
import { H1, H2 } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Check, Copy, AlertCircle, Loader2 } from 'lucide-react'

const urlEndpoint =
  import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/your_imagekit_id'
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY || 'your_public_key_here'
const privateKey = import.meta.env.VITE_IMAGEKIT_PRIVATE_KEY

const authenticator = async () => {
  try {
    if (!privateKey) {
      throw new Error('VITE_IMAGEKIT_PRIVATE_KEY is missing in .env')
    }

    const token = crypto.randomUUID()
    const expire = Math.floor(Date.now() / 1000) + 2400 // 40 minutes from now
    const privateKeySecret = new TextEncoder().encode(privateKey)
    const data = new TextEncoder().encode(token + expire)

    const key = await crypto.subtle.importKey(
      'raw',
      privateKeySecret,
      { name: 'HMAC', hash: 'SHA-1' },
      false,
      ['sign'],
    )

    const signatureBuffer = await crypto.subtle.sign('HMAC', key, data)

    const signature = Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')

    return { signature, expire, token }
  } catch (error: any) {
    throw new Error(`Authentication generation failed: ${error.message}`)
  }
}

const UploadPage = () => {
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const onError = (err: any) => {
    console.error('Upload Error:', err)
    setUploading(false)
    setError(
      typeof err === 'object' && err.message ? err.message : 'Something went wrong during upload.',
    )
  }

  const onSuccess = (res: any) => {
    console.log('Success Response:', res)
    setUploading(false)
    setUploadedUrl(res.url)
    setError(null)
  }

  const copyToClipboard = () => {
    if (uploadedUrl) {
      navigator.clipboard.writeText(uploadedUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className='container mx-auto py-12 px-4 max-w-2xl font-gabarito'>
      <H1 className='mb-6 text-center'>Asset Uploader</H1>

      <div className='bg-card border rounded-xl p-8 shadow-sm'>
        <H2 className='mb-4 text-xl border-none pb-0'>Upload to ImageKit</H2>
        <p className='text-muted-foreground mb-6'>
          Select an image to upload. You'll get a URL back that you can use in your projects.
        </p>

        {/* Configuration Warning - convenient for dev */}
        {(!import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT ||
          !import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY) && (
          <div className='bg-yellow-50 text-yellow-800 p-4 rounded-md mb-6 text-sm flex gap-3 items-start border border-yellow-200'>
            <AlertCircle className='w-5 h-5 shrink-0 mt-0.5' />
            <div>
              <strong>Configuration Missing:</strong> Make sure to set{' '}
              <code className='bg-yellow-100 px-1 rounded'>VITE_IMAGEKIT_URL_ENDPOINT</code> and{' '}
              <code className='bg-yellow-100 px-1 rounded'>VITE_IMAGEKIT_PUBLIC_KEY</code> in your{' '}
              <code className='bg-yellow-100 px-1 rounded'>.env</code> file.
            </div>
          </div>
        )}

        <IKContext publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
          <div className='space-y-6'>
            <div className='flex flex-col gap-4'>
              {/* Custom styled file input could go here, but using the default IKUpload for simplicity and reliability first */}
              <IKUpload
                className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer block w-full text-sm text-slate-500'
                fileName='uploaded-asset'
                onError={onError}
                onSuccess={onSuccess}
                onUploadStart={() => {
                  setUploading(true)
                  setError(null)
                  setUploadedUrl(null)
                }}
              />
            </div>

            {uploading && (
              <div className='flex items-center justify-center p-8 text-primary'>
                <Loader2 className='w-8 h-8 animate-spin' />
                <span className='ml-2'>Uploading...</span>
              </div>
            )}

            {error && (
              <div className='bg-destructive/10 text-destructive p-4 rounded-md text-sm'>
                {error}
              </div>
            )}

            {uploadedUrl && (
              <div className='bg-muted p-4 rounded-lg border space-y-3 animate-in fade-in slide-in-from-bottom-2'>
                <div className='text-sm font-medium text-muted-foreground'>Uploaded Asset URL:</div>
                <div className='flex items-center gap-2'>
                  <code className='flex-1 bg-background border p-2 rounded text-sm overflow-x-auto whitespace-nowrap'>
                    {uploadedUrl}
                  </code>
                  <Button size='icon' variant='outline' onClick={copyToClipboard} title='Copy URL'>
                    {copied ? (
                      <Check className='w-4 h-4 text-green-500' />
                    ) : (
                      <Copy className='w-4 h-4' />
                    )}
                  </Button>
                </div>
                <div className='mt-4 rounded-md overflow-hidden border bg-background flex justify-center p-2'>
                  <img
                    src={uploadedUrl}
                    alt='Uploaded preview'
                    className='max-h-64 object-contain'
                  />
                </div>
              </div>
            )}
          </div>
        </IKContext>
      </div>
    </div>
  )
}

export default UploadPage
