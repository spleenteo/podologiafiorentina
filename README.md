## s3 static template

How to install a Middleman Template

To use `s3_static_template` as a template, clone the Git repository into `~/.middleman`, like so:

	git clone git@gitlab.cantierecreativo.net:tommaso/s3_static_template.git ~/.middleman/s3_static_template


## Bootstrap di un progetto Middleman-Dato-Bemo

### Creare un progetto Middleman utilizzando il template `s3_static_template`

Per iniziare il bootstrap del progetto eseguire il seguente comando all'interno della directory dove si tengono i progetti:

	middleman init my_project --template=s3_static_template
	
Una volta che l'esecuzione del comando è stata completata eseguire:

	bundle install
	
Dopo il bundle lanciare il comando:
	
	npm install
	
**Il bootstrap è adesso completo!**
