const Footer = () => {
	return (
		<>
			<footer className='h-12 align-middle flex justify-between border-t-2 border-[#1E2D3D] pl-5   '>
				<h2 className='pt-2'>find me in:</h2>
				<div className='[&>*]:w-16 flex [&>*]:border-1  [&>*]:border-l-2 [&>*]:border-[#1E2D3D]'>
					<a className='flex items-center justify-center'>
						<img src='social/github.svg' />
					</a>
					<a className='flex items-center justify-center'>
						<img src='social/twitter.svg' />
					</a>
					<a className='flex items-center justify-center'>
						<img src='social/fb.svg' />
					</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;
